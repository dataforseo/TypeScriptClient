[Documentation](../README.md) / [Exports](../modules.md) / SpellInfo

# Class: SpellInfo

## Implements

- [`ISpellInfo`](../interfaces/ISpellInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](SpellInfo.md#constructor)

### Properties

- [keyword](SpellInfo.md#keyword)
- [type](SpellInfo.md#type)

### Methods

- [init](SpellInfo.md#init)
- [toJSON](SpellInfo.md#tojson)
- [fromJS](SpellInfo.md#fromjs)

## Constructors

### constructor

• **new SpellInfo**(`data?`): [`SpellInfo`](SpellInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ISpellInfo`](../interfaces/ISpellInfo.md) |

#### Returns

[`SpellInfo`](SpellInfo.md)

#### Defined in

main.ts:22369

## Properties

### keyword

• `Optional` **keyword**: `string`

keyword obtained as a result of search engine autocorrection
the results will be provided for the corrected keyword

#### Implementation of

[ISpellInfo](../interfaces/ISpellInfo.md).[keyword](../interfaces/ISpellInfo.md#keyword)

#### Defined in

main.ts:22359

___

### type

• `Optional` **type**: `string`

type of autocorrection
possible values:
did_you_mean, showing_results_for, no_results_found_for, including_results_for
note: Yahoo and Yandex support only the following autocorrection type:
including_results_for

#### Implementation of

[ISpellInfo](../interfaces/ISpellInfo.md).[type](../interfaces/ISpellInfo.md#type)

#### Defined in

main.ts:22365

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:22378

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:22396

___

### fromJS

▸ **fromJS**(`data`): [`SpellInfo`](SpellInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`SpellInfo`](SpellInfo.md)

#### Defined in

main.ts:22389
