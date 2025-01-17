[**Documentation**](../README.md)

***

[Documentation](../README.md) / TargetInfo

# Class: TargetInfo

Defined in: main.ts:150194

## Implements

- [`ITargetInfo`](../interfaces/ITargetInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new TargetInfo()

> **new TargetInfo**(`data`?): [`TargetInfo`](TargetInfo.md)

Defined in: main.ts:150215

#### Parameters

##### data?

[`ITargetInfo`](../interfaces/ITargetInfo.md)

#### Returns

[`TargetInfo`](TargetInfo.md)

## Properties

### cms?

> `optional` **cms**: `string`

Defined in: main.ts:150198

content management system

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`cms`](../interfaces/ITargetInfo.md#cms)

***

### country?

> `optional` **country**: `string`

Defined in: main.ts:150204

country code that the target domain is determined to belong to

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`country`](../interfaces/ITargetInfo.md#country)

***

### ip\_address?

> `optional` **ip\_address**: `string`

Defined in: main.ts:150202

IP address of the target

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`ip_address`](../interfaces/ITargetInfo.md#ip_address)

***

### is\_ip?

> `optional` **is\_ip**: `boolean`

Defined in: main.ts:150207

indicates if the target is IP
if true, the domain, subdomain or webpage functions as an IP address and does not have a domain name

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`is_ip`](../interfaces/ITargetInfo.md#is_ip)

***

### platform\_type?

> `optional` **platform\_type**: `string`[]

Defined in: main.ts:150200

platform type

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`platform_type`](../interfaces/ITargetInfo.md#platform_type)

***

### server?

> `optional` **server**: `string`

Defined in: main.ts:150196

server

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`server`](../interfaces/ITargetInfo.md#server)

***

### target\_spam\_score?

> `optional` **target\_spam\_score**: `number`

Defined in: main.ts:150211

spam score of the target
if the target is a domain/subdomain, this fields indicates the average spam score of all pages of that domain/subdomain;
learn more about how the metric is calculated on this help center page

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`target_spam_score`](../interfaces/ITargetInfo.md#target_spam_score)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:150224

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:150251

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`TargetInfo`](TargetInfo.md)

Defined in: main.ts:150244

#### Parameters

##### data

`any`

#### Returns

[`TargetInfo`](TargetInfo.md)
