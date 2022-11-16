import { S3Client, S3 } from "@aws-sdk/client-s3";
// Set the AWS Region.
const REGION = "eu-central-1"; //e.g. "us-east-1"
// Create an Amazon S3 service client object.
const s3Client = new S3Client({ region: REGION });

const s3 = new S3({
  region: REGION
})
export { s3Client, s3 };
