[Documentation](../README.md) / [Exports](../modules.md) / IPageMetrics

# Interface: IPageMetrics

## Implemented by

- [`PageMetrics`](../classes/PageMetrics.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [broken\_links](IPageMetrics.md#broken_links)
- [broken\_resources](IPageMetrics.md#broken_resources)
- [checks](IPageMetrics.md#checks)
- [duplicate\_content](IPageMetrics.md#duplicate_content)
- [duplicate\_description](IPageMetrics.md#duplicate_description)
- [duplicate\_title](IPageMetrics.md#duplicate_title)
- [links\_external](IPageMetrics.md#links_external)
- [links\_internal](IPageMetrics.md#links_internal)
- [links\_relation\_conflict](IPageMetrics.md#links_relation_conflict)
- [non\_indexable](IPageMetrics.md#non_indexable)
- [onpage\_score](IPageMetrics.md#onpage_score)
- [redirect\_loop](IPageMetrics.md#redirect_loop)

## Properties

### broken\_links

• `Optional` **broken\_links**: `number`

number of broken links
number of broken links across all crawled pages on a target website

#### Defined in

main.ts:143785

___

### broken\_resources

• `Optional` **broken\_resources**: `number`

number of broken resources
the number of images and other resources with broken links

#### Defined in

main.ts:143788

___

### checks

• `Optional` **checks**: `Object`

page-specific on-page check-ups

#### Index signature

▪ [key: `string`]: `number`

#### Defined in

main.ts:143806

___

### duplicate\_content

• `Optional` **duplicate\_content**: `number`

number of pages with duplicate content

#### Defined in

main.ts:143782

___

### duplicate\_description

• `Optional` **duplicate\_description**: `number`

number of pages with duplicate descriptions

#### Defined in

main.ts:143780

___

### duplicate\_title

• `Optional` **duplicate\_title**: `number`

number of pages with duplicate titles

#### Defined in

main.ts:143778

___

### links\_external

• `Optional` **links\_external**: `number`

number of external links
the number of links pointing to other websites

#### Defined in

main.ts:143773

___

### links\_internal

• `Optional` **links\_internal**: `number`

number of internal links
the number of links pointing to other pages within the target website

#### Defined in

main.ts:143776

___

### links\_relation\_conflict

• `Optional` **links\_relation\_conflict**: `number`

number of links present on the target website that may have a conflict
for example, if "links_relation_conflict": 2, the target website is referring to the same source by at least one internal link with the rel="nofollow" attribute and by at least one dofollow link

#### Defined in

main.ts:143791

___

### non\_indexable

• `Optional` **non\_indexable**: `number`

number of non-indexable pages
number of pages that are blocked from being indexed by Google and other search engines by robots.txt, HTTP headers, or meta tags settings;
you can receive a list of non-indexable URLs using this endpoint

#### Defined in

main.ts:143804

___

### onpage\_score

• `Optional` **onpage\_score**: `number`

shows how website is optimized on a 100-point scale
this field shows how website is optimized considering critical on-page issues and warnings detected;
100 is the highest possible score that means website does not have any critical on-page issues and important warnings;
note that this value depends on the number of crawled pages;
learn more about how the metric is calculated in this help center article

#### Defined in

main.ts:143800

___

### redirect\_loop

• `Optional` **redirect\_loop**: `number`

number of redirect chains that start and end at the same URL
number of redirect chains where the destination URL redirects back to the original URL

#### Defined in

main.ts:143794
