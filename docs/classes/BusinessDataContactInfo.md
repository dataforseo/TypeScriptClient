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

main.ts:195407

## Properties

### source?

> **`optional`** **source**: `string`

data source

#### Implementation of

[`IBusinessDataContactInfo`](../interfaces/IBusinessDataContactInfo.md).[`source`](../interfaces/IBusinessDataContactInfo.md#source)

#### Source

main.ts:195403

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IBusinessDataContactInfo`](../interfaces/IBusinessDataContactInfo.md).[`type`](../interfaces/IBusinessDataContactInfo.md#type)

#### Source

main.ts:195397

***

### value?

> **`optional`** **value**: `string`

contact displayed in SERP 
example:
"+119797979736"

#### Implementation of

[`IBusinessDataContactInfo`](../interfaces/IBusinessDataContactInfo.md).[`value`](../interfaces/IBusinessDataContactInfo.md#value)

#### Source

main.ts:195401

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:195416

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:195435

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataContactInfo`](BusinessDataContactInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataContactInfo`](BusinessDataContactInfo.md)

#### Source

main.ts:195428
