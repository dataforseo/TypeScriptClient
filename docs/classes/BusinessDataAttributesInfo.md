[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataAttributesInfo

# Class: BusinessDataAttributesInfo

Defined in: main.ts:211334

## Implements

- [`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BusinessDataAttributesInfo()

> **new BusinessDataAttributesInfo**(`data`?): [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

Defined in: main.ts:211344

#### Parameters

##### data?

[`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md)

#### Returns

[`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

## Properties

### available\_attributes?

> `optional` **available\_attributes**: `object`

Defined in: main.ts:211337

available attributes
indicates attributes a business entity can offer

#### Index Signature

\[`key`: `string`\]: `string`[]

#### Implementation of

[`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md).[`available_attributes`](../interfaces/IBusinessDataAttributesInfo.md#available_attributes)

***

### unavailable\_attributes?

> `optional` **unavailable\_attributes**: `object`

Defined in: main.ts:211340

unavailable attributes
indicates attributes a business entity cannot offer

#### Index Signature

\[`key`: `string`\]: `string`[]

#### Implementation of

[`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md).[`unavailable_attributes`](../interfaces/IBusinessDataAttributesInfo.md#unavailable_attributes)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:211353

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:211383

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

Defined in: main.ts:211376

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)
