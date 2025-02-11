[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksSummaryLiveResultInfo

# Interface: IBacklinksSummaryLiveResultInfo

Defined in: main.ts:150705

## Indexable

\[`key`: `string`\]: `any`

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:150723

indicates the number of backlinks

***

### backlinks\_spam\_score?

> `optional` **backlinks\_spam\_score**: `number`

Defined in: main.ts:150727

spam score of the backlinks
displays the total spam score of all backlinks pointing to the target domain, subdomain, or webpage;
to learn more about how the metric is calculated, refer to this Help Center page

***

### broken\_backlinks?

> `optional` **broken\_backlinks**: `number`

Defined in: main.ts:150740

number of broken backlinks
number of broken backlinks pointing to the target

***

### broken\_pages?

> `optional` **broken\_pages**: `number`

Defined in: main.ts:150744

number of broken pages
number of pages on the target that respond with 4xx or 5xx status codes
note that the number of broken pages includes pages on the target discovered by following external links, but it may also include pages discovered by following the target’s sitemap

***

### crawled\_pages?

> `optional` **crawled\_pages**: `number`

Defined in: main.ts:150729

number of crawled pages for the target

***

### external\_links\_count?

> `optional` **external\_links\_count**: `number`

Defined in: main.ts:150737

number of external links on the page
calculated as the sum of external links on the pages of the specified target

***

### first\_seen?

> `optional` **first\_seen**: `string`

Defined in: main.ts:150712

date and time when our crawler found the backlink for the target for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### info?

> `optional` **info**: [`TargetInfo`](../classes/TargetInfo.md)

Defined in: main.ts:150731

information about the target

***

### internal\_links\_count?

> `optional` **internal\_links\_count**: `number`

Defined in: main.ts:150734

number of internal links
calculated as the sum of internal links on the pages of the specified target

***

### lost\_date?

> `optional` **lost\_date**: `string`

Defined in: main.ts:150718

date and time when the backlink was lost
indicates the date and time when our crawler visited the target and it responded with a 4xx or 5xx status code or when its last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:150721

target rank
learn more about the metric and how it is calculated in this help center article

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:150747

indicates the number of referring domains
referring domains include subdomains that are counted as separate domains for this metric

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

Defined in: main.ts:150749

number of domains pointing at least one nofollow link to the target

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

Defined in: main.ts:150756

number of referring IP addresses
number of IP addresses pointing to this page

***

### referring\_links\_attributes?

> `optional` **referring\_links\_attributes**: `object`

Defined in: main.ts:150773

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute
example values:
nofollow, noopener, noreferrer, external, ugc, sponsored

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_countries?

> `optional` **referring\_links\_countries**: `object`

Defined in: main.ts:150787

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_platform\_types?

> `optional` **referring\_links\_platform\_types**: `object`

Defined in: main.ts:150778

types of referring platforms
indicates referring platform types and and link count per each platform
example values:
cms, blogs, unknown, ecommerce, message-boards

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_semantic\_locations?

> `optional` **referring\_links\_semantic\_locations**: `object`

Defined in: main.ts:150784

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
example values:
article, section, summary, ""

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_tld?

> `optional` **referring\_links\_tld**: `object`

Defined in: main.ts:150763

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_links\_types?

> `optional` **referring\_links\_types**: `object`

Defined in: main.ts:150768

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index Signature

\[`key`: `string`\]: `number`

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:150751

indicates the number of referring main domains

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

Defined in: main.ts:150753

number of main domains pointing at least one nofollow link to the target

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:150760

indicates the number of pages pointing to the target

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

Defined in: main.ts:150789

number of referring pages pointing at least one nofollow link to the target

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

Defined in: main.ts:150758

number of referring subnetworks

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:150707

target in a POST array
