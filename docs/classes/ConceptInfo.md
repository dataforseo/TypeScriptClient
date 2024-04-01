[Documentation](../README.md) / [Exports](../modules.md) / ConceptInfo

# Class: ConceptInfo

## Implements

- [`IConceptInfo`](../interfaces/IConceptInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ConceptInfo.md#constructor)

### Properties

- [concept\_group](ConceptInfo.md#concept_group)
- [name](ConceptInfo.md#name)

### Methods

- [init](ConceptInfo.md#init)
- [toJSON](ConceptInfo.md#tojson)
- [fromJS](ConceptInfo.md#fromjs)

## Constructors

### constructor

• **new ConceptInfo**(`data?`): [`ConceptInfo`](ConceptInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IConceptInfo`](../interfaces/IConceptInfo.md) |

#### Returns

[`ConceptInfo`](ConceptInfo.md)

#### Defined in

main.ts:117337

## Properties

### concept\_group

• `Optional` **concept\_group**: [`ConceptGroupInfo`](ConceptGroupInfo.md)

the concept group of the concept details

#### Implementation of

[IConceptInfo](../interfaces/IConceptInfo.md).[concept_group](../interfaces/IConceptInfo.md#concept_group)

#### Defined in

main.ts:117333

___

### name

• `Optional` **name**: `string`

the concept name for the keyword in the concept_group

#### Implementation of

[IConceptInfo](../interfaces/IConceptInfo.md).[name](../interfaces/IConceptInfo.md#name)

#### Defined in

main.ts:117331

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

main.ts:117346

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

main.ts:117364

___

### fromJS

▸ **fromJS**(`data`): [`ConceptInfo`](ConceptInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ConceptInfo`](ConceptInfo.md)

#### Defined in

main.ts:117357
