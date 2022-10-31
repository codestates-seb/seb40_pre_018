package com.notfound.stackoverflowclone.vote.mapper;

import com.notfound.stackoverflowclone.vote.dto.VoteDto;
import com.notfound.stackoverflowclone.vote.entity.Vote;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface VoteMapper {
    Vote patchDtoToEntity(VoteDto.Patch patchDto);

    VoteDto.Response entityToResponseDto(Vote vote);
}
