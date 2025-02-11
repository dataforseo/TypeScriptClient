[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsCategoriesResultInfo

# Class: DataforseoLabsCategoriesResultInfo

Defined in: main.ts:91668

## Implements

- [`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsCategoriesResultInfo()

> **new DataforseoLabsCategoriesResultInfo**(`data`?): [`DataforseoLabsCategoriesResultInfo`](DataforseoLabsCategoriesResultInfo.md)

Defined in: main.ts:91687

#### Parameters

##### data?

[`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md)

#### Returns

[`DataforseoLabsCategoriesResultInfo`](DataforseoLabsCategoriesResultInfo.md)

## Properties

### category\_code?

> `optional` **category\_code**: `number`

Defined in: main.ts:91670

category code

#### Implementation of

[`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md).[`category_code`](../interfaces/IDataforseoLabsCategoriesResultInfo.md#category_code)

***

### category\_code\_parent?

> `optional` **category\_code\_parent**: `number`

Defined in: main.ts:91683

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

***

### category\_name?

> `optional` **category\_name**: `string`

Defined in: main.ts:91672

full name of the category

#### Implementation of

[`IDataforseoLabsCategoriesResultInfo`](../interfaces/IDataforseoLabsCategoriesResultInfo.md).[`category_name`](../interfaces/IDataforseoLabsCategoriesResultInfo.md#category_name)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:91696

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:91715

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsCategoriesResultInfo`](DataforseoLabsCategoriesResultInfo.md)

Defined in: main.ts:91708

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsCategoriesResultInfo`](DataforseoLabsCategoriesResultInfo.md)
