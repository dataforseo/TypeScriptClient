[**Documentation**](../README.md)

***

[Documentation](../README.md) / TargetInfo

# Class: TargetInfo

## Implements

- [`ITargetInfo`](../interfaces/ITargetInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TargetInfo()

> **new TargetInfo**(`data`?): [`TargetInfo`](TargetInfo.md)

#### Parameters

##### data?

[`ITargetInfo`](../interfaces/ITargetInfo.md)

#### Returns

[`TargetInfo`](TargetInfo.md)

#### Defined in

main.ts:150147

## Properties

### cms?

> `optional` **cms**: `string`

content management system

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`cms`](../interfaces/ITargetInfo.md#cms)

#### Defined in

main.ts:150130

***

### country?

> `optional` **country**: `string`

country code that the target domain is determined to belong to

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`country`](../interfaces/ITargetInfo.md#country)

#### Defined in

main.ts:150136

***

### ip\_address?

> `optional` **ip\_address**: `string`

IP address of the target

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`ip_address`](../interfaces/ITargetInfo.md#ip_address)

#### Defined in

main.ts:150134

***

### is\_ip?

> `optional` **is\_ip**: `boolean`

indicates if the target is IP
if true, the domain, subdomain or webpage functions as an IP address and does not have a domain name

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`is_ip`](../interfaces/ITargetInfo.md#is_ip)

#### Defined in

main.ts:150139

***

### platform\_type?

> `optional` **platform\_type**: `string`[]

platform type

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`platform_type`](../interfaces/ITargetInfo.md#platform_type)

#### Defined in

main.ts:150132

***

### server?

> `optional` **server**: `string`

server

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`server`](../interfaces/ITargetInfo.md#server)

#### Defined in

main.ts:150128

***

### target\_spam\_score?

> `optional` **target\_spam\_score**: `number`

spam score of the target
if the target is a domain/subdomain, this fields indicates the average spam score of all pages of that domain/subdomain;
learn more about how the metric is calculated on this help center page

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`target_spam_score`](../interfaces/ITargetInfo.md#target_spam_score)

#### Defined in

main.ts:150143

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:150156

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:150183

***

### fromJS()

> `static` **fromJS**(`data`): [`TargetInfo`](TargetInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`TargetInfo`](TargetInfo.md)

#### Defined in

main.ts:150176
