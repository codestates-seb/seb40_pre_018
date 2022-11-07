package com.notfound.stackoverflowclone.dto;

import lombok.Getter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
public class MultiResponseDto<T> {
    private final List<T> data;
    private final PageInfo pageInfo;

    private <P> MultiResponseDto(List<T> data, Page<P> page) {
        this.data = data;
        this.pageInfo = PageInfo.of(page);
    }

    public static <T, P> MultiResponseDto<T> of(List<T> data, Page<P> page) {
        return new MultiResponseDto<>(data, page);
    }
}
