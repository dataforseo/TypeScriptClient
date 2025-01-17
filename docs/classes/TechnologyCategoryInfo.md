[**Documentation**](../README.md)

***

[Documentation](../README.md) / TechnologyCategoryInfo

# Class: TechnologyCategoryInfo

Defined in: main.ts:85574

## Implements

- [`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new TechnologyCategoryInfo()

> **new TechnologyCategoryInfo**(`data`?): [`TechnologyCategoryInfo`](TechnologyCategoryInfo.md)

Defined in: main.ts:85592

#### Parameters

##### data?

[`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md)

#### Returns

[`TechnologyCategoryInfo`](TechnologyCategoryInfo.md)

## Properties

### id?

> `optional` **id**: `string`

Defined in: main.ts:85578

id of the technology category
example:
crm, cart_abandonment

#### Implementation of

[`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md).[`id`](../interfaces/ITechnologyCategoryInfo.md#id)

***

### path?

> `optional` **path**: `string`

Defined in: main.ts:85582

path to the technology category
example:
user_generated_content.content_curation

#### Implementation of

[`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md).[`path`](../interfaces/ITechnologyCategoryInfo.md#path)

***

### technologies?

> `optional` **technologies**: `string`[]

Defined in: main.ts:85588

list of technologies in this category
example:
"Salesforce", "CareCart"

#### Implementation of

[`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md).[`technologies`](../interfaces/ITechnologyCategoryInfo.md#technologies)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:85584

title of the technology category

#### Implementation of

[`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md).[`title`](../interfaces/ITechnologyCategoryInfo.md#title)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:85601

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:85625

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`TechnologyCategoryInfo`](TechnologyCategoryInfo.md)

Defined in: main.ts:85618

#### Parameters

##### data

`any`

#### Returns

[`TechnologyCategoryInfo`](TechnologyCategoryInfo.md)
