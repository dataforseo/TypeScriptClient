**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AvailableLanguages

# Class: AvailableLanguages

## Implements

- [`IAvailableLanguages`](../interfaces/IAvailableLanguages.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AvailableLanguages(data)

> **new AvailableLanguages**(`data`?): [`AvailableLanguages`](AvailableLanguages.md)

#### Parameters

• **data?**: [`IAvailableLanguages`](../interfaces/IAvailableLanguages.md)

#### Returns

[`AvailableLanguages`](AvailableLanguages.md)

#### Source

main.ts:80241

## Properties

### available\_sources?

> **`optional`** **available\_sources**: `string`[]

supported sources
contains the sources of data supported for a specific location and language combination
only google and bing are currently available

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`available_sources`](../interfaces/IAvailableLanguages.md#available_sources)

#### Source

main.ts:80229

***

### keywords?

> **`optional`** **keywords**: `number`

the number of keywords available for the given location and language

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`keywords`](../interfaces/IAvailableLanguages.md#keywords)

#### Source

main.ts:80235

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code according to ISO 639-1

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`language_code`](../interfaces/IAvailableLanguages.md#language_code)

#### Source

main.ts:80233

***

### language\_name?

> **`optional`** **language\_name**: `string`

language name

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`language_name`](../interfaces/IAvailableLanguages.md#language_name)

#### Source

main.ts:80231

***

### serps?

> **`optional`** **serps**: `number`

the number of SERP pages available for the given location and language

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`serps`](../interfaces/IAvailableLanguages.md#serps)

#### Source

main.ts:80237

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:80250

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:80275

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AvailableLanguages`](AvailableLanguages.md)

#### Parameters

• **data**: `any`

#### Returns

[`AvailableLanguages`](AvailableLanguages.md)

#### Source

main.ts:80268
