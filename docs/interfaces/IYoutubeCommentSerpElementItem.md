**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IYoutubeCommentSerpElementItem

# Interface: IYoutubeCommentSerpElementItem

## Extends

- [`IBaseSerpElementItem`](IBaseSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### author\_name?

> **`optional`** **author\_name**: `string`

name of the author of the comment

#### Source

main.ts:65299

***

### author\_thumbnail?

> **`optional`** **author\_thumbnail**: `string`

the URL of the page where the author’s channel logo is hosted

#### Source

main.ts:65301

***

### author\_url?

> **`optional`** **author\_url**: `string`

URL of the author’s channel

#### Source

main.ts:65303

***

### likes\_count?

> **`optional`** **likes\_count**: `number`

number of likes on the comment

#### Source

main.ts:65314

***

### publication\_date?

> **`optional`** **publication\_date**: `string`

displayed publication date

#### Source

main.ts:65307

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Source

main.ts:65297

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Source

main.ts:65294

***

### reply\_count?

> **`optional`** **reply\_count**: `number`

number of replies on the comment

#### Source

main.ts:65316

***

### text?

> **`optional`** **text**: `string`

text of the comment

#### Source

main.ts:65305

***

### timestamp?

> **`optional`** **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2022-11-15 12:57:46 +00:00

#### Source

main.ts:65312
