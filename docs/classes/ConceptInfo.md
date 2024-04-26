**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ConceptInfo

# Class: ConceptInfo

## Implements

- [`IConceptInfo`](../interfaces/IConceptInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ConceptInfo(data)

> **new ConceptInfo**(`data`?): [`ConceptInfo`](ConceptInfo.md)

#### Parameters

• **data?**: [`IConceptInfo`](../interfaces/IConceptInfo.md)

#### Returns

[`ConceptInfo`](ConceptInfo.md)

#### Source

main.ts:117631

## Properties

### concept\_group?

> **`optional`** **concept\_group**: [`ConceptGroupInfo`](ConceptGroupInfo.md)

the concept group of the concept details

#### Implementation of

[`IConceptInfo`](../interfaces/IConceptInfo.md).[`concept_group`](../interfaces/IConceptInfo.md#concept_group)

#### Source

main.ts:117627

***

### name?

> **`optional`** **name**: `string`

the concept name for the keyword in the concept_group

#### Implementation of

[`IConceptInfo`](../interfaces/IConceptInfo.md).[`name`](../interfaces/IConceptInfo.md#name)

#### Source

main.ts:117625

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:117640

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:117658

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ConceptInfo`](ConceptInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ConceptInfo`](ConceptInfo.md)

#### Source

main.ts:117651
