/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */

declare module "sst" {
  export interface Resource {
    "MyBucket": {
      "name": string
      "type": "sst.aws.Bucket"
    }
    "MySecret": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "MyWeb": {
      "type": "sst.aws.Nextjs"
      "url": string
    }
  }
}
/// <reference path="sst-env.d.ts" />

import "sst"
export {}