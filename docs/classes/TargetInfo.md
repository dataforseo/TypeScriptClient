**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / TargetInfo

# Class: TargetInfo

## Implements

- [`ITargetInfo`](../interfaces/ITargetInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TargetInfo(data)

> **new TargetInfo**(`data`?): [`TargetInfo`](TargetInfo.md)

#### Parameters

• **data?**: [`ITargetInfo`](../interfaces/ITargetInfo.md)

#### Returns

[`TargetInfo`](TargetInfo.md)

#### Source

main.ts:134909

## Properties

### cms?

> **`optional`** **cms**: `string`

content management system

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`cms`](../interfaces/ITargetInfo.md#cms)

#### Source

main.ts:134892

***

### country?

> **`optional`** **country**: `string`

country code that the target domain is determined to belong to

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`country`](../interfaces/ITargetInfo.md#country)

#### Source

main.ts:134898

***

### ip\_address?

> **`optional`** **ip\_address**: `string`

IP address of the target

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`ip_address`](../interfaces/ITargetInfo.md#ip_address)

#### Source

main.ts:134896

***

### is\_ip?

> **`optional`** **is\_ip**: `boolean`

indicates if the target is IP
if true, the domain, subdomain or webpage functions as an IP address and does not have a domain name

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`is_ip`](../interfaces/ITargetInfo.md#is_ip)

#### Source

main.ts:134901

***

### platform\_type?

> **`optional`** **platform\_type**: `string`[]

platform type

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`platform_type`](../interfaces/ITargetInfo.md#platform_type)

#### Source

main.ts:134894

***

### server?

> **`optional`** **server**: `string`

server

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`server`](../interfaces/ITargetInfo.md#server)

#### Source

main.ts:134890

***

### target\_spam\_score?

> **`optional`** **target\_spam\_score**: `number`

spam score of the target
if the target is a domain/subdomain, this fields indicates the average spam score of all pages of that domain/subdomain;
learn more about how the metric is calculated on this help center page

#### Implementation of

[`ITargetInfo`](../interfaces/ITargetInfo.md).[`target_spam_score`](../interfaces/ITargetInfo.md#target_spam_score)

#### Source

main.ts:134905

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:134918

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:134945

***

### fromJS()

> **`static`** **fromJS**(`data`): [`TargetInfo`](TargetInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`TargetInfo`](TargetInfo.md)

#### Source

main.ts:134938
