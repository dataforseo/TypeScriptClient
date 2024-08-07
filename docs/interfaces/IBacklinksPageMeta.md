**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IBacklinksPageMeta

# Interface: IBacklinksPageMeta

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### canonical?

> **`optional`** **canonical**: `string`

canonical page

#### Source

main.ts:143785

***

### charset?

> **`optional`** **charset**: `string`

character encoding
examples:
utf-8

#### Source

main.ts:143821

***

### external\_links\_count?

> **`optional`** **external\_links\_count**: `number`

number of external links on the page

#### Source

main.ts:143789

***

### h1?

> **`optional`** **h1**: `string`[]

h1 tag
content of h1 tags

#### Source

main.ts:143803

***

### h2?

> **`optional`** **h2**: `string`[]

h2 tag
content of h2 tags

#### Source

main.ts:143806

***

### h3?

> **`optional`** **h3**: `string`[]

h3 tag
content of h3 tags

#### Source

main.ts:143809

***

### images\_alt?

> **`optional`** **images\_alt**: `string`[]

content of alt tags

#### Source

main.ts:143811

***

### images\_count?

> **`optional`** **images\_count**: `number`

number of images on the page

#### Source

main.ts:143791

***

### internal\_links\_count?

> **`optional`** **internal\_links\_count**: `number`

number of internal links on the page

#### Source

main.ts:143787

***

### language?

> **`optional`** **language**: `string`

page content language
example:
en

#### Source

main.ts:143817

***

### page\_spam\_score?

> **`optional`** **page\_spam\_score**: `number`

spam score of the page
learn more about how the metric is calculated on this help center page

#### Source

main.ts:143796

***

### platform\_type?

> **`optional`** **platform\_type**: `string`[]

type of a platform

#### Source

main.ts:143823

***

### powered\_by?

> **`optional`** **powered\_by**: `string`[]

CMS details

#### Source

main.ts:143813

***

### social\_media\_tags?

> **`optional`** **social\_media\_tags**: `Object`

array of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

main.ts:143800

***

### technologies?

> **`optional`** **technologies**: `Object`

website technologies

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

main.ts:143825

***

### title?

> **`optional`** **title**: `string`

page title

#### Source

main.ts:143783

***

### words\_count?

> **`optional`** **words\_count**: `number`

number of words on the page

#### Source

main.ts:143793
