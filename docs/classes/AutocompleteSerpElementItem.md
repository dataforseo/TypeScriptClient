[Documentation](../README.md) / [Exports](../modules.md) / AutocompleteSerpElementItem

# Class: AutocompleteSerpElementItem

## Hierarchy

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

  ↳ **`AutocompleteSerpElementItem`**

## Implements

- [`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](AutocompleteSerpElementItem.md#constructor)

### Properties

- [\_discriminator](AutocompleteSerpElementItem.md#_discriminator)
- [highlighted](AutocompleteSerpElementItem.md#highlighted)
- [rank\_absolute](AutocompleteSerpElementItem.md#rank_absolute)
- [rank\_group](AutocompleteSerpElementItem.md#rank_group)
- [relevance](AutocompleteSerpElementItem.md#relevance)
- [search\_query\_url](AutocompleteSerpElementItem.md#search_query_url)
- [suggestion](AutocompleteSerpElementItem.md#suggestion)
- [suggestion\_type](AutocompleteSerpElementItem.md#suggestion_type)

### Methods

- [init](AutocompleteSerpElementItem.md#init)
- [toJSON](AutocompleteSerpElementItem.md#tojson)
- [fromJS](AutocompleteSerpElementItem.md#fromjs)

## Constructors

### constructor

• **new AutocompleteSerpElementItem**(`data?`): [`AutocompleteSerpElementItem`](AutocompleteSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IAutocompleteSerpElementItem`](../interfaces/IAutocompleteSerpElementItem.md) |

#### Returns

[`AutocompleteSerpElementItem`](AutocompleteSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[constructor](BaseSerpElementItem.md#constructor)

#### Defined in

main.ts:51327

## Properties

### \_discriminator

• `Protected` **\_discriminator**: `string`

#### Inherited from

[BaseSerpElementItem](BaseSerpElementItem.md).[_discriminator](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:19788

___

### highlighted

• `Optional` **highlighted**: `string`[]

#### Implementation of

[IAutocompleteSerpElementItem](../interfaces/IAutocompleteSerpElementItem.md).[highlighted](../interfaces/IAutocompleteSerpElementItem.md#highlighted)

#### Defined in

main.ts:51323

___

### rank\_absolute

• `Optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[IAutocompleteSerpElementItem](../interfaces/IAutocompleteSerpElementItem.md).[rank_absolute](../interfaces/IAutocompleteSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:51306

___

### rank\_group

• `Optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[IAutocompleteSerpElementItem](../interfaces/IAutocompleteSerpElementItem.md).[rank_group](../interfaces/IAutocompleteSerpElementItem.md#rank_group)

#### Defined in

main.ts:51303

___

### relevance

• `Optional` **relevance**: `number`

relevance of suggested keyword
represents the relevant of the autocomplete suggestion to the target keyword
can take values from 500 to 2000
the higher the value, the more relevant is the suggestion
Note: only available for the following client:
chrome/chrome-omni

#### Implementation of

[IAutocompleteSerpElementItem](../interfaces/IAutocompleteSerpElementItem.md).[relevance](../interfaces/IAutocompleteSerpElementItem.md#relevance)

#### Defined in

main.ts:51313

___

### search\_query\_url

• `Optional` **search\_query\_url**: `string`

url to search results
url to search results relevant to the google autocomplete suggestion

#### Implementation of

[IAutocompleteSerpElementItem](../interfaces/IAutocompleteSerpElementItem.md).[search_query_url](../interfaces/IAutocompleteSerpElementItem.md#search_query_url)

#### Defined in

main.ts:51322

___

### suggestion

• `Optional` **suggestion**: `string`

google autocomplete keyword suggestion

#### Implementation of

[IAutocompleteSerpElementItem](../interfaces/IAutocompleteSerpElementItem.md).[suggestion](../interfaces/IAutocompleteSerpElementItem.md#suggestion)

#### Defined in

main.ts:51315

___

### suggestion\_type

• `Optional` **suggestion\_type**: `string`

google autocomplete suggestion type
Note: only available for the following client:
chrome/chrome-omni

#### Implementation of

[IAutocompleteSerpElementItem](../interfaces/IAutocompleteSerpElementItem.md).[suggestion_type](../interfaces/IAutocompleteSerpElementItem.md#suggestion_type)

#### Defined in

main.ts:51319

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[init](BaseSerpElementItem.md#init)

#### Defined in

main.ts:51332

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[toJSON](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:51360

___

### fromJS

▸ **fromJS**(`data`): [`AutocompleteSerpElementItem`](AutocompleteSerpElementItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`AutocompleteSerpElementItem`](AutocompleteSerpElementItem.md)

#### Overrides

[BaseSerpElementItem](BaseSerpElementItem.md).[fromJS](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:51353
