[**Documentation**](../README.md)

***

[Documentation](../README.md) / TechnologyCategoryInfo

# Class: TechnologyCategoryInfo

## Implements

- [`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new TechnologyCategoryInfo()

> **new TechnologyCategoryInfo**(`data`?): [`TechnologyCategoryInfo`](TechnologyCategoryInfo.md)

#### Parameters

##### data?

[`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md)

#### Returns

[`TechnologyCategoryInfo`](TechnologyCategoryInfo.md)

#### Defined in

main.ts:85592

## Properties

### id?

> `optional` **id**: `string`

id of the technology category
example:
crm, cart_abandonment

#### Implementation of

[`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md).[`id`](../interfaces/ITechnologyCategoryInfo.md#id)

#### Defined in

main.ts:85578

***

### path?

> `optional` **path**: `string`

path to the technology category
example:
user_generated_content.content_curation

#### Implementation of

[`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md).[`path`](../interfaces/ITechnologyCategoryInfo.md#path)

#### Defined in

main.ts:85582

***

### technologies?

> `optional` **technologies**: `string`[]

list of technologies in this category
example:
"Salesforce", "CareCart"

#### Implementation of

[`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md).[`technologies`](../interfaces/ITechnologyCategoryInfo.md#technologies)

#### Defined in

main.ts:85588

***

### title?

> `optional` **title**: `string`

title of the technology category

#### Implementation of

[`ITechnologyCategoryInfo`](../interfaces/ITechnologyCategoryInfo.md).[`title`](../interfaces/ITechnologyCategoryInfo.md#title)

#### Defined in

main.ts:85584

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:85601

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:85625

***

### fromJS()

> `static` **fromJS**(`data`): [`TechnologyCategoryInfo`](TechnologyCategoryInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`TechnologyCategoryInfo`](TechnologyCategoryInfo.md)

#### Defined in

main.ts:85618
