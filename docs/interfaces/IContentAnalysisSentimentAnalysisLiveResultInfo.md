[dataforseo-client](../README.md) / [Exports](../modules.md) / IContentAnalysisSentimentAnalysisLiveResultInfo

# Interface: IContentAnalysisSentimentAnalysisLiveResultInfo

## Implemented by

- [`ContentAnalysisSentimentAnalysisLiveResultInfo`](../classes/ContentAnalysisSentimentAnalysisLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [positive\_connotation\_distribution](IContentAnalysisSentimentAnalysisLiveResultInfo.md#positive_connotation_distribution)
- [sentiment\_connotation\_distribution](IContentAnalysisSentimentAnalysisLiveResultInfo.md#sentiment_connotation_distribution)
- [type](IContentAnalysisSentimentAnalysisLiveResultInfo.md#type)

## Properties

### positive\_connotation\_distribution

• `Optional` **positive\_connotation\_distribution**: [`PositiveConnotationDistribution`](../classes/PositiveConnotationDistribution.md)

citation distribution by sentiment connotation types
contains objects with citation counts and relevant data distributed by types of sentiments (sentiment polarity);
possible sentiment connotation types: positive, negative, neutral

#### Defined in

[main.ts:158032](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158032)

___

### sentiment\_connotation\_distribution

• `Optional` **sentiment\_connotation\_distribution**: [`SentimentConnotationDistribution`](../classes/SentimentConnotationDistribution.md)

citation distribution by sentiment connotations
contains objects with citation counts and relevant data distributed by sentiments (emotional reactions);
possible sentiment connotation types: anger, happiness, love, sadness, share, fun

#### Defined in

[main.ts:158036](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158036)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:158028](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L158028)
