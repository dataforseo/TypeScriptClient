[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ITargetInfo

# Interface: ITargetInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### cms?

> `optional` **cms**: `string`

content management system

#### Defined in

main.ts:142104

***

### country?

> `optional` **country**: `string`

country code that the target domain is determined to belong to

#### Defined in

main.ts:142110

***

### ip\_address?

> `optional` **ip\_address**: `string`

IP address of the target

#### Defined in

main.ts:142108

***

### is\_ip?

> `optional` **is\_ip**: `boolean`

indicates if the target is IP
if true, the domain, subdomain or webpage functions as an IP address and does not have a domain name

#### Defined in

main.ts:142113

***

### platform\_type?

> `optional` **platform\_type**: `string`[]

platform type

#### Defined in

main.ts:142106

***

### server?

> `optional` **server**: `string`

server

#### Defined in

main.ts:142102

***

### target\_spam\_score?

> `optional` **target\_spam\_score**: `number`

spam score of the target
if the target is a domain/subdomain, this fields indicates the average spam score of all pages of that domain/subdomain;
learn more about how the metric is calculated on this help center page

#### Defined in

main.ts:142117
