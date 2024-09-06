[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IBacklinksBulkNewLostReferringDomainsLiveRequestInfo

# Interface: IBacklinksBulkNewLostReferringDomainsLiveRequestInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### date\_from?

> `optional` **date\_from**: `string`

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

main.ts:150870

***

### tag?

> `optional` **tag**: `string`

user-defined task identifier
optional field
the character limit is 255
you can use this parameter to identify the task and match it with the result
you will find the specified tag value in the data object of the response

#### Defined in

main.ts:150876

***

### targets?

> `optional` **targets**: `string`[]

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

main.ts:150857
