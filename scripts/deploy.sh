#!/bin/bash

# ===========================================
# VETPAL Deploy Script
# Builds and deploys to SiteGround via SFTP
# ===========================================

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}   VETPAL Deployment Script${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Load environment variables
if [ -f .env ]; then
    export $(grep -v '^#' .env | grep -E '^(SFTP_HOST|SFTP_USER|SFTP_PASS|SFTP_PORT|SFTP_PATH)=' | xargs)
else
    echo -e "${RED}Error: .env file not found${NC}"
    exit 1
fi

# Validate required environment variables
if [ -z "$SFTP_HOST" ] || [ -z "$SFTP_USER" ] || [ -z "$SFTP_PASS" ] || [ -z "$SFTP_PORT" ]; then
    echo -e "${RED}Error: Missing SFTP credentials in .env file${NC}"
    echo "Required: SFTP_HOST, SFTP_USER, SFTP_PASS, SFTP_PORT, SFTP_PATH"
    exit 1
fi

# Default path if not set
SFTP_PATH=${SFTP_PATH:-"/public_html/"}

echo -e "${YELLOW}Step 1: Installing dependencies...${NC}"
npm install --silent

echo -e "${YELLOW}Step 2: Building production bundle...${NC}"
npm run build

if [ ! -d "dist" ]; then
    echo -e "${RED}Error: Build failed - dist folder not found${NC}"
    exit 1
fi

echo -e "${GREEN}✓ Build successful${NC}"
echo ""

echo -e "${YELLOW}Step 3: Deploying to SiteGround...${NC}"
echo -e "   Host: ${SFTP_HOST}"
echo -e "   Path: ${SFTP_PATH}"
echo ""

# Check if lftp is installed
if ! command -v lftp &> /dev/null; then
    echo -e "${YELLOW}lftp not found. Attempting to install via brew...${NC}"
    if command -v brew &> /dev/null; then
        brew install lftp
    else
        echo -e "${RED}Error: lftp is required. Please install it:${NC}"
        echo "  macOS: brew install lftp"
        echo "  Ubuntu: sudo apt-get install lftp"
        exit 1
    fi
fi

# Deploy using lftp (supports SFTP)
lftp -c "
set sftp:auto-confirm yes
set ssl:verify-certificate no
open -u $SFTP_USER,$SFTP_PASS sftp://$SFTP_HOST:$SFTP_PORT
mirror --reverse --delete --verbose dist/ $SFTP_PATH
bye
"

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}========================================${NC}"
    echo -e "${GREEN}   ✓ Deployment Complete!${NC}"
    echo -e "${GREEN}========================================${NC}"
    echo ""
    echo -e "Your site is now live at: ${BLUE}https://vetpal.org${NC}"
else
    echo -e "${RED}Error: Deployment failed${NC}"
    exit 1
fi
