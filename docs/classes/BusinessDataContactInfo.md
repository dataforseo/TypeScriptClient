**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataContactInfo

# Class: BusinessDataContactInfo

## Implements

- [`IBusinessDataContactInfo`](../interfaces/IBusinessDataContactInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataContactInfo(data)

> **new BusinessDataContactInfo**(`data`?): [`BusinessDataContactInfo`](BusinessDataContactInfo.md)

#### Parameters

• **data?**: [`IBusinessDataContactInfo`](../interfaces/IBusinessDataContactInfo.md)

#### Returns

[`BusinessDataContactInfo`](BusinessDataContactInfo.md)

#### Source

main.ts:201517

## Properties

### source?

> **`optional`** **source**: `string`

data source

#### Implementation of

[`IBusinessDataContactInfo`](../interfaces/IBusinessDataContactInfo.md).[`source`](../interfaces/IBusinessDataContactInfo.md#source)

#### Source

main.ts:201513

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBusinessDataContactInfo`](../interfaces/IBusinessDataContactInfo.md).[`type`](../interfaces/IBusinessDataContactInfo.md#type)

#### Source

main.ts:201507

***

### value?

> **`optional`** **value**: `string`

contact displayed in SERP 
example:
"+119797979736"

#### Implementation of

[`IBusinessDataContactInfo`](../interfaces/IBusinessDataContactInfo.md).[`value`](../interfaces/IBusinessDataContactInfo.md#value)

#### Source

main.ts:201511

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:201526

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:201545

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataContactInfo`](BusinessDataContactInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataContactInfo`](BusinessDataContactInfo.md)

#### Source

main.ts:201538
