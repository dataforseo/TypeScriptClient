**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksSummaryLiveResultInfo

# Interface: IBacklinksSummaryLiveResultInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### backlinks?

> **`optional`** **backlinks**: `number`

indicates the number of backlinks

#### Source

main.ts:137524

***

### backlinks\_spam\_score?

> **`optional`** **backlinks\_spam\_score**: `number`

spam score of the backlinks
displays the total spam score of all backlinks pointing to the target domain, subdomain, or webpage;
to learn more about how the metric is calculated, refer to this Help Center page

#### Source

main.ts:137528

***

### broken\_backlinks?

> **`optional`** **broken\_backlinks**: `number`

number of broken backlinks
number of broken backlinks pointing to the target

#### Source

main.ts:137541

***

### broken\_pages?

> **`optional`** **broken\_pages**: `number`

number of broken pages
number of pages on the target that respond with 4xx or 5xx status codes
note that the number of broken pages includes pages on the target discovered by following external links, but it may also include pages discovered by following the target’s sitemap

#### Source

main.ts:137545

***

### crawled\_pages?

> **`optional`** **crawled\_pages**: `number`

number of crawled pages for the target

#### Source

main.ts:137530

***

### external\_links\_count?

> **`optional`** **external\_links\_count**: `number`

number of external links on the page
calculated as the sum of external links on the pages of the specified target

#### Source

main.ts:137538

***

### first\_seen?

> **`optional`** **first\_seen**: `string`

date and time when our crawler found the backlink for the target for the first time
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:137513

***

### info?

> **`optional`** **info**: [`TargetInfo`](../classes/TargetInfo.md)

information about the target

#### Source

main.ts:137532

***

### internal\_links\_count?

> **`optional`** **internal\_links\_count**: `number`

number of internal links
calculated as the sum of internal links on the pages of the specified target

#### Source

main.ts:137535

***

### lost\_date?

> **`optional`** **lost\_date**: `string`

date and time when the backlink was lost
indicates the date and time when our crawler visited the target and it responded with a 4xx or 5xx status code or when its last backlink was removed
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:137519

***

### rank?

> **`optional`** **rank**: `number`

target rank
learn more about the metric and how it is calculated in this help center article

#### Source

main.ts:137522

***

### referring\_domains?

> **`optional`** **referring\_domains**: `number`

indicates the number of referring domains
referring domains include subdomains that are counted as separate domains for this metric

#### Source

main.ts:137548

***

### referring\_domains\_nofollow?

> **`optional`** **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target

#### Source

main.ts:137550

***

### referring\_ips?

> **`optional`** **referring\_ips**: `number`

number of referring IP addresses
number of IP addresses pointing to this page

#### Source

main.ts:137557

***

### referring\_links\_attributes?

> **`optional`** **referring\_links\_attributes**: `Object`

link attributes of the referring links
indicates link attributes of the referring links and link count per each attribute
example values:
nofollow, noopener, noreferrer, external, ugc, sponsored

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:137574

***

### referring\_links\_countries?

> **`optional`** **referring\_links\_countries**: `Object`

ISO country codes of the referring links
indicates ISO country codes of the domains where the referring links are located and the link count per each country

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:137588

***

### referring\_links\_platform\_types?

> **`optional`** **referring\_links\_platform\_types**: `Object`

types of referring platforms
indicates referring platform types and and link count per each platform
example values:
cms, blogs, unknown, ecommerce, message-boards

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:137579

***

### referring\_links\_semantic\_locations?

> **`optional`** **referring\_links\_semantic\_locations**: `Object`

semantic locations of the referring links
indicates semantic elements in HTML where the referring links are located and link count per each semantic location
you can get the full list of semantic elements here
example values:
article, section, summary, ""

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:137585

***

### referring\_links\_tld?

> **`optional`** **referring\_links\_tld**: `Object`

top-level domains of the referring links
contains top level domains and referring link count per each

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:137564

***

### referring\_links\_types?

> **`optional`** **referring\_links\_types**: `Object`

types of referring links
indicates the types of the referring links and link count per each type
possible values:
anchor, image, link, meta, canonical, alternate, redirect

#### Index signature

 \[`key`: `string`\]: `number`

#### Source

main.ts:137569

***

### referring\_main\_domains?

> **`optional`** **referring\_main\_domains**: `number`

indicates the number of referring main domains

#### Source

main.ts:137552

***

### referring\_main\_domains\_nofollow?

> **`optional`** **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target

#### Source

main.ts:137554

***

### referring\_pages?

> **`optional`** **referring\_pages**: `number`

indicates the number of pages pointing to the target

#### Source

main.ts:137561

***

### referring\_pages\_nofollow?

> **`optional`** **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target

#### Source

main.ts:137590

***

### referring\_subnets?

> **`optional`** **referring\_subnets**: `number`

number of referring subnetworks

#### Source

main.ts:137559

***

### target?

> **`optional`** **target**: `string`

target in a POST array

#### Source

main.ts:137508
