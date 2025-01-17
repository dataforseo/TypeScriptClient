[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksTimeseriesSummaryLiveItem

# Interface: IBacklinksTimeseriesSummaryLiveItem

Defined in: main.ts:159543

## Indexable

\[`key`: `string`\]: `any`

## Properties

### backlinks?

> `optional` **backlinks**: `number`

Defined in: main.ts:159555

number of backlinks for the given date

***

### backlinks\_nofollow?

> `optional` **backlinks\_nofollow**: `number`

Defined in: main.ts:159557

number of nofollow backlinks for the given date

***

### date?

> `optional` **date**: `string`

Defined in: main.ts:159550

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:159553

target rank for the given date
learn more about the metric and how it is calculated in this help center article

***

### referring\_domains?

> `optional` **referring\_domains**: `number`

Defined in: main.ts:159564

number of referring domains for the given date
referring domains include subdomains that are counted as separate domains for this metric

***

### referring\_domains\_nofollow?

> `optional` **referring\_domains\_nofollow**: `number`

Defined in: main.ts:159566

number of domains pointing at least one nofollow link to the target for the given date

***

### referring\_ips?

> `optional` **referring\_ips**: `number`

Defined in: main.ts:159573

number of referring IP addresses for the given date
number of IP addresses pointing to this page

***

### referring\_main\_domains?

> `optional` **referring\_main\_domains**: `number`

Defined in: main.ts:159568

number of referring main domains for the given date

***

### referring\_main\_domains\_nofollow?

> `optional` **referring\_main\_domains\_nofollow**: `number`

Defined in: main.ts:159570

number of main domains pointing at least one nofollow link to the target for the given date

***

### referring\_pages?

> `optional` **referring\_pages**: `number`

Defined in: main.ts:159559

number of pages pointing to target for the given date

***

### referring\_pages\_nofollow?

> `optional` **referring\_pages\_nofollow**: `number`

Defined in: main.ts:159561

number of referring pages pointing at least one nofollow link to the target for the given date

***

### referring\_subnets?

> `optional` **referring\_subnets**: `number`

Defined in: main.ts:159575

number of referring subnetworks for the given date

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:159545

type of element
