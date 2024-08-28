[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsCategoriesResultInfo

# Class: DataforseoLabsCategoriesResultInfo

## Implements

- [`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsCategoriesResultInfo()

> **new DataforseoLabsCategoriesResultInfo**(`data`?): [`DataforseoLabsCategoriesResultInfo`](DataforseoLabsCategoriesResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md)

#### Returns

[`DataforseoLabsCategoriesResultInfo`](DataforseoLabsCategoriesResultInfo.md)

#### Defined in

main.ts:83234

## Properties

### category\_code?

> `optional` **category\_code**: `number`

category code

#### Implementation of

[`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md).[`category_code`](../interfaces/IDataforseoLabsCategoriesResultInfo.md#category_code)

#### Defined in

main.ts:83217

***

### category\_code\_parent?

> `optional` **category\_code\_parent**: `number`

the code of the superordinate category
example:
"category_code": 10178,
"category_name": "Apparel Accessories",
"category_code_parent": 10021
where category_code_parent
corresponds to:
"category_code": 10021,
"category_name": "Apparel"
"category_code_parent": null

#### Implementation of

[`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md).[`category_code_parent`](../interfaces/IDataforseoLabsCategoriesResultInfo.md#category_code_parent)

#### Defined in

main.ts:83230

***

### category\_name?

> `optional` **category\_name**: `string`

full name of the category

#### Implementation of

[`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md).[`category_name`](../interfaces/IDataforseoLabsCategoriesResultInfo.md#category_name)

#### Defined in

main.ts:83219

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:83243

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:83262

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsCategoriesResultInfo`](DataforseoLabsCategoriesResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsCategoriesResultInfo`](DataforseoLabsCategoriesResultInfo.md)

#### Defined in

main.ts:83255
