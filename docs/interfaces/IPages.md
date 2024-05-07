**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IPages

# Interface: IPages

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### page?

> **`optional`** **page**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

information about the page with duplicate content

#### Source

main.ts:154995

***

### similarity?

> **`optional`** **similarity**: `number`

content similarity score
by default, the content is considered duplicate if the value is greater than or equals 6
can take values from 0 to 10

#### Source

main.ts:154993
