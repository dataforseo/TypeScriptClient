**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppMetricsInfo

# Class: AppMetricsInfo

## Implements

- [`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppMetricsInfo(data)

> **new AppMetricsInfo**(`data`?): [`AppMetricsInfo`](AppMetricsInfo.md)

#### Parameters

• **data?**: [`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md)

#### Returns

[`AppMetricsInfo`](AppMetricsInfo.md)

#### Source

main.ts:104152

## Properties

### count?

> **`optional`** **count**: `number`

total count of Amazon organic SERPs that contain the product

#### Implementation of

[`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md).[`count`](../interfaces/IAppMetricsInfo.md#count)

#### Source

main.ts:104146

***

### pos\_1?

> **`optional`** **pos\_1**: `number`

number of organic SERPs where the product ranks #1

#### Implementation of

[`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md).[`pos_1`](../interfaces/IAppMetricsInfo.md#pos_1)

#### Source

main.ts:104138

***

### pos\_11\_100?

> **`optional`** **pos\_11\_100**: `number`

number of organic SERPs where the product ranks #11-100

#### Implementation of

[`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md).[`pos_11_100`](../interfaces/IAppMetricsInfo.md#pos_11_100)

#### Source

main.ts:104144

***

### pos\_2\_3?

> **`optional`** **pos\_2\_3**: `number`

number of organic SERPs where the product ranks #2-3

#### Implementation of

[`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md).[`pos_2_3`](../interfaces/IAppMetricsInfo.md#pos_2_3)

#### Source

main.ts:104140

***

### pos\_4\_10?

> **`optional`** **pos\_4\_10**: `number`

number of organic SERPs where the product ranks #4-10

#### Implementation of

[`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md).[`pos_4_10`](../interfaces/IAppMetricsInfo.md#pos_4_10)

#### Source

main.ts:104142

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

total search volume of the product’s ranking keywords in organic SERP

#### Implementation of

[`IAppMetricsInfo`](../interfaces/IAppMetricsInfo.md).[`search_volume`](../interfaces/IAppMetricsInfo.md#search_volume)

#### Source

main.ts:104148

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:104161

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:104183

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppMetricsInfo`](AppMetricsInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppMetricsInfo`](AppMetricsInfo.md)

#### Source

main.ts:104176
