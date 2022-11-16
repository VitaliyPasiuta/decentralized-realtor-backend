// Import required AWS SDK clients and commands for Node.js.
import { PutObjectCommand, CreateBucketCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { ReadStream, createReadStream } from "fs";
import { s3Client, s3 } from "./sampleClient";

export interface S3UploadFile {
  Bucket: string,
  Key: string,
  Body: ReadStream,
}

export interface S3DownloadFile {
  Bucket: string,
  Key: string,
}

const params = {
  Bucket: "vpasiuta-test-bucket", // The name of the bucket. For example, 'sample_bucket_101'.
  Key: "sample_upload.txt", // The name of the object. For example, 'sample_upload.txt'.
  Body: "Hello world!", // The content of the object. For example, 'Hello world!".
};

export const run = async (params: S3UploadFile) => {
  // Create an Amazon S3 bucket.
  try {
    const data = await s3Client.send(
        new CreateBucketCommand({ Bucket: params.Bucket })
    );
    console.log(data);
    console.log("Successfully created a bucket called ", data.Location);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
  // Create an object and upload it to the Amazon S3 bucket.
  try {
    const results = await s3Client.send(new PutObjectCommand(params));
    console.log(
        "Successfully created " +
        params.Key +
        " and uploaded it to " +
        params.Bucket +
        "/" +
        params.Key
    );
    return results; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};

export const downloadFile = async (params: S3DownloadFile) => {
  try{

    // const result = await s3Client.send(new GetObjectCommand(params));
    console.log("Get file from S3");
    // const transformedResult = await result.Body.transformToString();
    // return transformedResult;

    return s3.getObject(params)
  }
  catch (err) {
    console.log("Error", err);
  }
}

