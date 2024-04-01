[Documentation](../README.md) / [Exports](../modules.md) / IBacklinksBulkNewLostReferringDomainsLiveRequestInfo

# Interface: IBacklinksBulkNewLostReferringDomainsLiveRequestInfo

## Implemented by

- [`BacklinksBulkNewLostReferringDomainsLiveRequestInfo`](../classes/BacklinksBulkNewLostReferringDomainsLiveRequestInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [date\_from](IBacklinksBulkNewLostReferringDomainsLiveRequestInfo.md#date_from)
- [tag](IBacklinksBulkNewLostReferringDomainsLiveRequestInfo.md#tag)
- [targets](IBacklinksBulkNewLostReferringDomainsLiveRequestInfo.md#targets)

## Properties

### date\_from

• `Optional` **date\_from**: `string`

starting date of the time range
optional field
this field indicates the date which will be used as a threshold for new and lost referring domains;
the referring domains that appeared in our index after the specified date will be considered as new;
the referring domains that weren’t found after the specified date, but were present before, will be considered as lost;
default value: today’s date -(minus) one month;
e.g. if today is 2021-10-13, default date_from will be 2021-09-13.
minimum value equals today’s date -(minus) one year;
e.g. if today is 2021-10-13, minimum date_from will be 2020-10-13.
date format: "yyyy-mm-dd"
example:
"2021-01-01"

#### Defined in

main.ts:146599

___

### tag

• `Optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:146605

___

### targets

• `Optional` **targets**: `string`[]

domains, subdomains or webpages to get  new & lost referring domains for
required field
you can set up to 1000 domains, subdomains or webpages
the domain or subdomain should be specified without https:// and www.
the page should be specified with absolute URL (including http:// or https://)
example:
"targets": [
  "forbes.com",
  "cnn.com",
  "bbc.com",
  "yelp.com",
  "https://www.apple.com/iphone/",
  "https://ahrefs.com/blog/",
  "ibm.com",
  "https://variety.com/",
  "https://stackoverflow.com/",
  "www.trustpilot.com"
]

#### Defined in

main.ts:146586
