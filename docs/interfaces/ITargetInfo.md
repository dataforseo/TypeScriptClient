**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ITargetInfo

# Interface: ITargetInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### cms?

> **`optional`** **cms**: `string`

content management system

#### Source

main.ts:140278

***

### country?

> **`optional`** **country**: `string`

country code that the target domain is determined to belong to

#### Source

main.ts:140284

***

### ip\_address?

> **`optional`** **ip\_address**: `string`

IP address of the target

#### Source

main.ts:140282

***

### is\_ip?

> **`optional`** **is\_ip**: `boolean`

indicates if the target is IP
if true, the domain, subdomain or webpage functions as an IP address and does not have a domain name

#### Source

main.ts:140287

***

### platform\_type?

> **`optional`** **platform\_type**: `string`[]

platform type

#### Source

main.ts:140280

***

### server?

> **`optional`** **server**: `string`

server

#### Source

main.ts:140276

***

### target\_spam\_score?

> **`optional`** **target\_spam\_score**: `number`

spam score of the target
if the target is a domain/subdomain, this fields indicates the average spam score of all pages of that domain/subdomain;
learn more about how the metric is calculated on this help center page

#### Source

main.ts:140291
