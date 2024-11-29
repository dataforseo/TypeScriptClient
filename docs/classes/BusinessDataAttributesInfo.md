[**Documentation**](../README.md)

***

[Documentation](../README.md) / BusinessDataAttributesInfo

# Class: BusinessDataAttributesInfo

## Implements

- [`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BusinessDataAttributesInfo()

> **new BusinessDataAttributesInfo**(`data`?): [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

#### Parameters

##### data?

[`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md)

#### Returns

[`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

#### Defined in

main.ts:210774

## Properties

### available\_attributes?

> `optional` **available\_attributes**: `object`

available attributes
indicates attributes a business entity can offer

#### Index Signature

 \[`key`: `string`\]: `string`[]

#### Implementation of

[`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md).[`available_attributes`](../interfaces/IBusinessDataAttributesInfo.md#available_attributes)

#### Defined in

main.ts:210767

***

### unavailable\_attributes?

> `optional` **unavailable\_attributes**: `object`

unavailable attributes
indicates attributes a business entity cannot offer

#### Index Signature

 \[`key`: `string`\]: `string`[]

#### Implementation of

[`IBusinessDataAttributesInfo`](../interfaces/IBusinessDataAttributesInfo.md).[`unavailable_attributes`](../interfaces/IBusinessDataAttributesInfo.md#unavailable_attributes)

#### Defined in

main.ts:210770

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:210783

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:210813

***

### fromJS()

> `static` **fromJS**(`data`): [`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BusinessDataAttributesInfo`](BusinessDataAttributesInfo.md)

#### Defined in

main.ts:210806
