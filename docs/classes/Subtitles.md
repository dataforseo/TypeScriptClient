**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / Subtitles

# Class: Subtitles

## Implements

- [`ISubtitles`](../interfaces/ISubtitles.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new Subtitles(data)

> **new Subtitles**(`data`?): [`Subtitles`](Subtitles.md)

#### Parameters

• **data?**: [`ISubtitles`](../interfaces/ISubtitles.md)

#### Returns

[`Subtitles`](Subtitles.md)

#### Source

main.ts:61956

## Properties

### is\_auto\_generated?

> **`optional`** **is\_auto\_generated**: `boolean`

defines if subtitles are auto generated

#### Implementation of

[`ISubtitles`](../interfaces/ISubtitles.md).[`is_auto_generated`](../interfaces/ISubtitles.md#is_auto_generated)

#### Source

main.ts:61952

***

### is\_translatable?

> **`optional`** **is\_translatable**: `boolean`

defines if subtitles are translatable

#### Implementation of

[`ISubtitles`](../interfaces/ISubtitles.md).[`is_translatable`](../interfaces/ISubtitles.md#is_translatable)

#### Source

main.ts:61950

***

### language?

> **`optional`** **language**: `string`

language of subtitles

#### Implementation of

[`ISubtitles`](../interfaces/ISubtitles.md).[`language`](../interfaces/ISubtitles.md#language)

#### Source

main.ts:61948

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:61965

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:61984

***

### fromJS()

> **`static`** **fromJS**(`data`): [`Subtitles`](Subtitles.md)

#### Parameters

• **data**: `any`

#### Returns

[`Subtitles`](Subtitles.md)

#### Source

main.ts:61977