#!/bin/bash

# Unicorn Taxidermy - S3 Deployment Script
# This script syncs the public/ folder to both the root and www buckets.

ROOT_BUCKET="unicorntaxidermy.com"
WWW_BUCKET="www.unicorntaxidermy.com"

echo "🚀 Starting deployment to $ROOT_BUCKET..."
aws s3 sync public/ s3://$ROOT_BUCKET --delete --acl public-read

echo "🚀 Mirroring deployment to $WWW_BUCKET..."
aws s3 sync public/ s3://$WWW_BUCKET --delete --acl public-read

DISTRIBUTION_ID="EJC9X8NFGEKH9"
echo "🧹 Invalidating CloudFront cache for $DISTRIBUTION_ID..."
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

echo "✅ Deployment complete! Check the site at https://unicorntaxidermy.com"
