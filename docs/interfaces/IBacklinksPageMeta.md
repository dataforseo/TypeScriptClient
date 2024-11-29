[**Documentation**](../README.md)

***

[Documentation](../README.md) / IBacklinksPageMeta

# Interface: IBacklinksPageMeta

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### canonical?

> `optional` **canonical**: `string`

canonical page

#### Defined in

main.ts:153715

***

### charset?

> `optional` **charset**: `string`

character encoding
examples:
utf-8

#### Defined in

main.ts:153751

***

### external\_links\_count?

> `optional` **external\_links\_count**: `number`

number of external links on the page

#### Defined in

main.ts:153719

***

### h1?

> `optional` **h1**: `string`[]

h1 tag
content of h1 tags

#### Defined in

main.ts:153733

***

### h2?

> `optional` **h2**: `string`[]

h2 tag
content of h2 tags

#### Defined in

main.ts:153736

***

### h3?

> `optional` **h3**: `string`[]

h3 tag
content of h3 tags

#### Defined in

main.ts:153739

***

### images\_alt?

> `optional` **images\_alt**: `string`[]

content of alt tags

#### Defined in

main.ts:153741

***

### images\_count?

> `optional` **images\_count**: `number`

number of images on the page

#### Defined in

main.ts:153721

***

### internal\_links\_count?

> `optional` **internal\_links\_count**: `number`

number of internal links on the page

#### Defined in

main.ts:153717

***

### language?

> `optional` **language**: `string`

page content language
example:
en

#### Defined in

main.ts:153747

***

### page\_spam\_score?

> `optional` **page\_spam\_score**: `number`

spam score of the page
learn more about how the metric is calculated on this help center page

#### Defined in

main.ts:153726

***

### platform\_type?

> `optional` **platform\_type**: `string`[]

type of a platform

#### Defined in

main.ts:153753

***

### powered\_by?

> `optional` **powered\_by**: `string`[]

CMS details

#### Defined in

main.ts:153743

***

### social\_media\_tags?

> `optional` **social\_media\_tags**: `object`

array of social media tags found on the page
contains social media tags and their content
supported tags include but are not limited to Open Graph and Twitter card

#### Index Signature

 \[`key`: `string`\]: `string`

#### Defined in

main.ts:153730

***

### technologies?

> `optional` **technologies**: `object`

website technologies

#### Index Signature

 \[`key`: `string`\]: `string`

#### Defined in

main.ts:153755

***

### title?

> `optional` **title**: `string`

page title

#### Defined in

main.ts:153713

***

### words\_count?

> `optional` **words\_count**: `number`

number of words on the page

#### Defined in

main.ts:153723
