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

main.ts:144325

***

### backlinks\_nofollow?

> **`optional`** **backlinks\_nofollow**: `number`

number of nofollow backlinks for the given date

#### Source

main.ts:144327

***

### date?

> **`optional`** **date**: `string`

date and time when the data for the target was stored
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:144320

***

### rank?

> **`optional`** **rank**: `number`

target rank for the given date
learn more about the metric and how it is calculated in this help center article

#### Source

main.ts:144323

***

### referring\_domains?

> **`optional`** **referring\_domains**: `number`

number of referring domains for the given date
referring domains include subdomains that are counted as separate domains for this metric

#### Source

main.ts:144334

***

### referring\_domains\_nofollow?

> **`optional`** **referring\_domains\_nofollow**: `number`

number of domains pointing at least one nofollow link to the target for the given date

#### Source

main.ts:144336

***

### referring\_ips?

> **`optional`** **referring\_ips**: `number`

number of referring IP addresses for the given date
number of IP addresses pointing to this page

#### Source

main.ts:144343

***

### referring\_main\_domains?

> **`optional`** **referring\_main\_domains**: `number`

number of referring main domains for the given date

#### Source

main.ts:144338

***

### referring\_main\_domains\_nofollow?

> **`optional`** **referring\_main\_domains\_nofollow**: `number`

number of main domains pointing at least one nofollow link to the target for the given date

#### Source

main.ts:144340

***

### referring\_pages?

> **`optional`** **referring\_pages**: `number`

number of pages pointing to target for the given date

#### Source

main.ts:144329

***

### referring\_pages\_nofollow?

> **`optional`** **referring\_pages\_nofollow**: `number`

number of referring pages pointing at least one nofollow link to the target for the given date

#### Source

main.ts:144331

***

### referring\_subnets?

> **`optional`** **referring\_subnets**: `number`

number of referring subnetworks for the given date

#### Source

main.ts:144345

***

### type?

> **`optional`** **type**: `string`

type of element

#### Source

main.ts:144315
