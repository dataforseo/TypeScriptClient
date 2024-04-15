**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsCategoriesResultInfo

# Class: DataforseoLabsCategoriesResultInfo

## Implements

- [`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsCategoriesResultInfo(data)

> **new DataforseoLabsCategoriesResultInfo**(`data`?): [`DataforseoLabsCategoriesResultInfo`](DataforseoLabsCategoriesResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md)

#### Returns

[`DataforseoLabsCategoriesResultInfo`](DataforseoLabsCategoriesResultInfo.md)

#### Source

main.ts:80548

## Properties

### category\_code?

> **`optional`** **category\_code**: `number`

category code

#### Implementation of

[`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md).[`category_code`](../interfaces/IDataforseoLabsCategoriesResultInfo.md#category_code)

#### Source

main.ts:80531

***

### category\_code\_parent?

> **`optional`** **category\_code\_parent**: `number`

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

#### Source

main.ts:80544

***

### category\_name?

> **`optional`** **category\_name**: `string`

full name of the category

#### Implementation of

[`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md).[`category_name`](../interfaces/IDataforseoLabsCategoriesResultInfo.md#category_name)

#### Source

main.ts:80533

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:80557

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:80576

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsCategoriesResultInfo`](DataforseoLabsCategoriesResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsCategoriesResultInfo`](DataforseoLabsCategoriesResultInfo.md)

#### Source

main.ts:80569
