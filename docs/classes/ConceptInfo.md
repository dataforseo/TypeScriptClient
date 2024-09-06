[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ConceptInfo

# Class: ConceptInfo

## Implements

- [`IConceptInfo`](../interfaces/IConceptInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ConceptInfo()

> **new ConceptInfo**(`data`?): [`ConceptInfo`](ConceptInfo.md)

#### Parameters

• **data?**: [`IConceptInfo`](../interfaces/IConceptInfo.md)

#### Returns

[`ConceptInfo`](ConceptInfo.md)

#### Defined in

main.ts:118976

## Properties

### concept\_group?

> `optional` **concept\_group**: [`ConceptGroupInfo`](ConceptGroupInfo.md)

the concept group of the concept details

#### Implementation of

[`IConceptInfo`](../interfaces/IConceptInfo.md).[`concept_group`](../interfaces/IConceptInfo.md#concept_group)

#### Defined in

main.ts:118972

***

### name?

> `optional` **name**: `string`

the concept name for the keyword in the concept_group

#### Implementation of

[`IConceptInfo`](../interfaces/IConceptInfo.md).[`name`](../interfaces/IConceptInfo.md#name)

#### Defined in

main.ts:118970

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:118985

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:119003

***

### fromJS()

> `static` **fromJS**(`data`): [`ConceptInfo`](ConceptInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ConceptInfo`](ConceptInfo.md)

#### Defined in

main.ts:118996
