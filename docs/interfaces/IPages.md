[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IPages

# Interface: IPages

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### page?

> `optional` **page**: [`BaseOnPageResourceItemInfo`](../classes/BaseOnPageResourceItemInfo.md)[]

information about the page with duplicate content

#### Defined in

main.ts:157299

***

### similarity?

> `optional` **similarity**: `number`

content similarity score
by default, the content is considered duplicate if the value is greater than or equals 6
can take values from 0 to 10

#### Defined in

main.ts:157297
