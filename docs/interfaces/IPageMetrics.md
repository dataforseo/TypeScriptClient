[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IPageMetrics

# Interface: IPageMetrics

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### broken\_links?

> `optional` **broken\_links**: `number`

number of broken links
number of broken links across all crawled pages on a target website

#### Defined in

main.ts:157030

***

### broken\_resources?

> `optional` **broken\_resources**: `number`

number of broken resources
the number of images and other resources with broken links

#### Defined in

main.ts:157033

***

### checks?

> `optional` **checks**: `object`

page-specific on-page check-ups

#### Index Signature

 \[`key`: `string`\]: `number`

#### Defined in

main.ts:157051

***

### duplicate\_content?

> `optional` **duplicate\_content**: `number`

number of pages with duplicate content

#### Defined in

main.ts:157027

***

### duplicate\_description?

> `optional` **duplicate\_description**: `number`

number of pages with duplicate descriptions

#### Defined in

main.ts:157025

***

### duplicate\_title?

> `optional` **duplicate\_title**: `number`

number of pages with duplicate titles

#### Defined in

main.ts:157023

***

### links\_external?

> `optional` **links\_external**: `number`

number of external links
the number of links pointing to other websites

#### Defined in

main.ts:157018

***

### links\_internal?

> `optional` **links\_internal**: `number`

number of internal links
the number of links pointing to other pages within the target website

#### Defined in

main.ts:157021

***

### links\_relation\_conflict?

> `optional` **links\_relation\_conflict**: `number`

number of links present on the target website that may have a conflict
for example, if "links_relation_conflict": 2, the target website is referring to the same source by at least one internal link with the rel="nofollow" attribute and by at least one dofollow link

#### Defined in

main.ts:157036

***

### non\_indexable?

> `optional` **non\_indexable**: `number`

number of non-indexable pages
number of pages that are blocked from being indexed by Google and other search engines by robots.txt, HTTP headers, or meta tags settings;
you can receive a list of non-indexable URLs using this endpoint

#### Defined in

main.ts:157049

***

### onpage\_score?

> `optional` **onpage\_score**: `number`

shows how website is optimized on a 100-point scale
this field shows how website is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means website does not have any critical on-page issues and important warnings;
note that this value depends on the number of crawled pages;
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:157045

***

### redirect\_loop?

> `optional` **redirect\_loop**: `number`

number of redirect chains that start and end at the same URL
number of redirect chains where the destination URL redirects back to the original URL

#### Defined in

main.ts:157039
