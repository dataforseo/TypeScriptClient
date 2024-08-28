[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / ConceptInfo

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

main.ts:121885

## Properties

### concept\_group?

> `optional` **concept\_group**: [`ConceptGroupInfo`](ConceptGroupInfo.md)

the concept group of the concept details

#### Implementation of

[`IConceptInfo`](../interfaces/IConceptInfo.md).[`concept_group`](../interfaces/IConceptInfo.md#concept_group)

#### Defined in

main.ts:121881

***

### name?

> `optional` **name**: `string`

the concept name for the keyword in the concept_group

#### Implementation of

[`IConceptInfo`](../interfaces/IConceptInfo.md).[`name`](../interfaces/IConceptInfo.md#name)

#### Defined in

main.ts:121879

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:121894

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:121912

***

### fromJS()

> `static` **fromJS**(`data`): [`ConceptInfo`](ConceptInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ConceptInfo`](ConceptInfo.md)

#### Defined in

main.ts:121905
