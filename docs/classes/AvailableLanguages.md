[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AvailableLanguages

# Class: AvailableLanguages

## Implements

- [`IAvailableLanguages`](../interfaces/IAvailableLanguages.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AvailableLanguages()

> **new AvailableLanguages**(`data`?): [`AvailableLanguages`](AvailableLanguages.md)

#### Parameters

• **data?**: [`IAvailableLanguages`](../interfaces/IAvailableLanguages.md)

#### Returns

[`AvailableLanguages`](AvailableLanguages.md)

#### Defined in

main.ts:82939

## Properties

### available\_sources?

> `optional` **available\_sources**: `string`[]

supported sources
contains the sources of data supported for a specific location and language combination
only google and bing are currently available

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`available_sources`](../interfaces/IAvailableLanguages.md#available_sources)

#### Defined in

main.ts:82927

***

### keywords?

> `optional` **keywords**: `number`

the number of keywords available for the given location and language

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`keywords`](../interfaces/IAvailableLanguages.md#keywords)

#### Defined in

main.ts:82933

***

### language\_code?

> `optional` **language\_code**: `string`

language code according to ISO 639-1

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`language_code`](../interfaces/IAvailableLanguages.md#language_code)

#### Defined in

main.ts:82931

***

### language\_name?

> `optional` **language\_name**: `string`

language name

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`language_name`](../interfaces/IAvailableLanguages.md#language_name)

#### Defined in

main.ts:82929

***

### serps?

> `optional` **serps**: `number`

the number of SERP pages available for the given location and language

#### Implementation of

[`IAvailableLanguages`](../interfaces/IAvailableLanguages.md).[`serps`](../interfaces/IAvailableLanguages.md#serps)

#### Defined in

main.ts:82935

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:82948

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:82973

***

### fromJS()

> `static` **fromJS**(`data`): [`AvailableLanguages`](AvailableLanguages.md)

#### Parameters

• **data**: `any`

#### Returns

[`AvailableLanguages`](AvailableLanguages.md)

#### Defined in

main.ts:82966
