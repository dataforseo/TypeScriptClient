[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / Subtitles

# Class: Subtitles

## Implements

- [`ISubtitles`](../interfaces/ISubtitles.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Subtitles()

> **new Subtitles**(`data`?): [`Subtitles`](Subtitles.md)

#### Parameters

• **data?**: [`ISubtitles`](../interfaces/ISubtitles.md)

#### Returns

[`Subtitles`](Subtitles.md)

#### Defined in

main.ts:62139

## Properties

### is\_auto\_generated?

> `optional` **is\_auto\_generated**: `boolean`

defines if subtitles are auto generated

#### Implementation of

[`ISubtitles`](../interfaces/ISubtitles.md).[`is_auto_generated`](../interfaces/ISubtitles.md#is_auto_generated)

#### Defined in

main.ts:62135

***

### is\_translatable?

> `optional` **is\_translatable**: `boolean`

defines if subtitles are translatable

#### Implementation of

[`ISubtitles`](../interfaces/ISubtitles.md).[`is_translatable`](../interfaces/ISubtitles.md#is_translatable)

#### Defined in

main.ts:62133

***

### language?

> `optional` **language**: `string`

language of subtitles

#### Implementation of

[`ISubtitles`](../interfaces/ISubtitles.md).[`language`](../interfaces/ISubtitles.md#language)

#### Defined in

main.ts:62131

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:62148

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:62167

***

### fromJS()

> `static` **fromJS**(`data`): [`Subtitles`](Subtitles.md)

#### Parameters

• **data**: `any`

#### Returns

[`Subtitles`](Subtitles.md)

#### Defined in

main.ts:62160
