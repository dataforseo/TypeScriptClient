[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksPageMeta

# Interface: IBacklinksPageMeta

Defined in: main.ts:153943

## Indexable

\[`key`: `string`\]: `any`

## Properties

### canonical?

> `optional` **canonical**: `string`

Defined in: main.ts:153947

canonical page

***

### charset?

> `optional` **charset**: `string`

Defined in: main.ts:153983

character encoding
examples:
utf-8

***

### external\_links\_count?

> `optional` **external\_links\_count**: `number`

Defined in: main.ts:153951

number of external links on the page

***

### h1?

> `optional` **h1**: `string`[]

Defined in: main.ts:153965

h1 tag
content of h1 tags

***

### h2?

> `optional` **h2**: `string`[]

Defined in: main.ts:153968

h2 tag
content of h2 tags

***

### h3?

> `optional` **h3**: `string`[]

Defined in: main.ts:153971

h3 tag
content of h3 tags

***

### images\_alt?

> `optional` **images\_alt**: `string`[]

Defined in: main.ts:153973

content of alt tags

***

### images\_count?

> `optional` **images\_count**: `number`

Defined in: main.ts:153953

number of images on the page

***

### internal\_links\_count?

> `optional` **internal\_links\_count**: `number`

Defined in: main.ts:153949

number of internal links on the page

***

### language?

> `optional` **language**: `string`

Defined in: main.ts:153979

page content language
example:
en

***

### page\_spam\_score?

> `optional` **page\_spam\_score**: `number`

Defined in: main.ts:153958

spam score of the page
learn more about how the metric is calculated on this help center page

***

### platform\_type?

> `optional` **platform\_type**: `string`[]

Defined in: main.ts:153985

type of a platform

***

### powered\_by?

> `optional` **powered\_by**: `string`[]

Defined in: main.ts:153975

CMS details

***

### social\_media\_tags?

> `optional` **social\_media\_tags**: `object`

Defined in: main.ts:153962

array of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index Signature

\[`key`: `string`\]: `string`

***

### technologies?

> `optional` **technologies**: `object`

Defined in: main.ts:153987

website technologies

#### Index Signature

\[`key`: `string`\]: `string`

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:153945

page title

***

### words\_count?

> `optional` **words\_count**: `number`

Defined in: main.ts:153955

number of words on the page
