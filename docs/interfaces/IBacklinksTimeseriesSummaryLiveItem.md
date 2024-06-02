**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksTimeseriesSummaryLiveItem

# Interface: IBacklinksTimeseriesSummaryLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### backlinks?

> **`optional`** **backlinks**: `number`

number of backlinks for the given date

#### Source

main.ts:145294

***

### backlinks\_nofollow?

> **`optional`** **backlinks\_nofollow**: `number`

number of nofollow backlinks for the given date

#### Source

main.ts:145296

***

### date?

> **`optional`** **date**: `string`

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:145289

***

### rank?

> **`optional`** **rank**: `number`

target rank for the given date
learn more about the metric and how it is calculated in this help center article

#### Source

main.ts:145292

***

### referring\_domains?

> **`optional`** **referring\_domains**: `number`

number of referring domains for the given date
referring domains include subdomains that are counted as separate domains for this metric

#### Source

main.ts:145303

***

### referring\_domains\_nofollow?

> **`optional`** **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target for the given date

#### Source

main.ts:145305

***

### referring\_ips?

> **`optional`** **referring\_ips**: `number`

number of referring IP addresses for the given date
number of IP addresses pointing to this page

#### Source

main.ts:145312

***

### referring\_main\_domains?

> **`optional`** **referring\_main\_domains**: `number`

number of referring main domains for the given date

#### Source

main.ts:145307

***

### referring\_main\_domains\_nofollow?

> **`optional`** **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target for the given date

#### Source

main.ts:145309

***

### referring\_pages?

> **`optional`** **referring\_pages**: `number`

number of pages pointing to target for the given date

#### Source

main.ts:145298

***

### referring\_pages\_nofollow?

> **`optional`** **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target for the given date

#### Source

main.ts:145300

***

### referring\_subnets?

> **`optional`** **referring\_subnets**: `number`

number of referring subnetworks for the given date

#### Source

main.ts:145314

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:145284
