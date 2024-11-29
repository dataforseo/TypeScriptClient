[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataContactInfo

# Class: BusinessDataContactInfo

## Implements

- [`IBusinessDataContactInfo`](../interfaces/IBusinessDataContactInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataContactInfo()

> **new BusinessDataContactInfo**(`data`?): [`BusinessDataContactInfo`](BusinessDataContactInfo.md)

#### Parameters

##### data?

[`IBusinessDataContactInfo`](../interfaces/IBusinessDataContactInfo.md)

#### Returns

[`BusinessDataContactInfo`](BusinessDataContactInfo.md)

#### Defined in

main.ts:211114

## Properties

### source?

> `optional` **source**: `string`

data source

#### Implementation of

[`IBusinessDataContactInfo`](../interfaces/IBusinessDataContactInfo.md).[`source`](../interfaces/IBusinessDataContactInfo.md#source)

#### Defined in

main.ts:211110

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBusinessDataContactInfo`](../interfaces/IBusinessDataContactInfo.md).[`type`](../interfaces/IBusinessDataContactInfo.md#type)

#### Defined in

main.ts:211104

***

### value?

> `optional` **value**: `string`

contact displayed in SERP 
example:
"+119797979736"

#### Implementation of

[`IBusinessDataContactInfo`](../interfaces/IBusinessDataContactInfo.md).[`value`](../interfaces/IBusinessDataContactInfo.md#value)

#### Defined in

main.ts:211108

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:211123

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:211142

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataContactInfo`](BusinessDataContactInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataContactInfo`](BusinessDataContactInfo.md)

#### Defined in

main.ts:211135
