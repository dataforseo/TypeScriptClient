**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BusinessDataAttributesInfo

# Class: BusinessDataAttributesInfo

## Implements

- [`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataAttributesInfo(data)

> **new BusinessDataAttributesInfo**(`data`?): [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

#### Parameters

• **data?**: [`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md)

#### Returns

[`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

#### Source

main.ts:196396

## Properties

### available\_attributes?

> **`optional`** **available\_attributes**: `Object`

available attributes
indicates attributes a business entity can offer

#### Index signature

 \[`key`: `string`\]: (`string` \| `undefined`)[]

#### Implementation of

[`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md).[`available_attributes`](../interfaces/IBusinessDataAttributesInfo.md#available_attributes)

#### Source

main.ts:196389

***

### unavailable\_attributes?

> **`optional`** **unavailable\_attributes**: `Object`

unavailable attributes
indicates attributes a business entity cannot offer

#### Index signature

 \[`key`: `string`\]: (`string` \| `undefined`)[]

#### Implementation of

[`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md).[`unavailable_attributes`](../interfaces/IBusinessDataAttributesInfo.md#unavailable_attributes)

#### Source

main.ts:196392

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:196405

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:196435

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

#### Source

main.ts:196428
