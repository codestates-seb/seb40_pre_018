package com.notfound.stackoverflowclone.vote.mapper;

import com.notfound.stackoverflowclone.vote.dto.VoteDto;
import com.notfound.stackoverflowclone.vote.entity.Vote;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface VoteMapper {
    Vote postDtoToEntity(VoteDto.Post postDto);

    VoteDto.Response entityToResponseDto(Vote vote);
}
