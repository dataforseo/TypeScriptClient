**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAvailableLanguages

# Interface: IAvailableLanguages

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### available\_sources?

> **`optional`** **available\_sources**: `string`[]

supported sources
contains the sources of data supported for a specific location and language combination
only google and bing are currently available

#### Source

main.ts:82400

***

### keywords?

> **`optional`** **keywords**: `number`

the number of keywords available for the given location and language

#### Source

main.ts:82406

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code according to ISO 639-1

#### Source

main.ts:82404

***

### language\_name?

> **`optional`** **language\_name**: `string`

language name

#### Source

main.ts:82402

***

### serps?

> **`optional`** **serps**: `number`

the number of SERP pages available for the given location and language

#### Source

main.ts:82408
